import lookup from "country-code-lookup";

export interface Country {
  iso2: string;
  name: {
    common: string;
  };
  capital?: string[];
  region: string;
  flags: {
    png: string;
    alt?: string;
  };
}

interface CountriesNowCountry {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

interface CountriesNowResponse {
  error: boolean;
  msg: string;
  data: CountriesNowCountry[];
}

interface CountryCapital {
  name: string;
  capital: string;
  iso2: string;
  iso3: string;
}

interface CapitalsResponse {
  error: boolean;
  msg: string;
  data: CountryCapital[];
}

const countryNames = new Intl.DisplayNames(["es"], {
  type: "region",
});

function getSpanishCountryName(
  englishName: string,
  iso2: string
): string {
  if (!/^[A-Za-z]{2}$/.test(iso2)) {
    return englishName;
  }

  const spanishName = countryNames.of(iso2.toUpperCase());

  return spanishName || englishName;
}

function getSpanishCapital(capital: string): string {
  const translations: Record<string, string> = {
    "Mexico City": "Ciudad de México",
    London: "Londres",
    Rome: "Roma",
    Lisbon: "Lisboa",
    Vienna: "Viena",
    Athens: "Atenas",
    Moscow: "Moscú",
    Copenhagen: "Copenhague",
    Prague: "Praga",
    Warsaw: "Varsovia",
    Beijing: "Pekín",
    Tokyo: "Tokio",
  };

  return translations[capital] || capital;
}

export async function getCountries(): Promise<Country[]> {
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/flag/images"
  );

  if (!response.ok) {
    throw new Error("No se pudieron obtener los países");
  }

  const result: CountriesNowResponse = await response.json();

  if (result.error || !Array.isArray(result.data)) {
    throw new Error("La API devolvió datos incorrectos");
  }

  const capitalsResponse = await fetch(
    "https://countriesnow.space/api/v0.1/countries/capital"
  );

  if (!capitalsResponse.ok) {
    throw new Error("No se pudieron obtener las capitales");
  }

  const capitalsResult: CapitalsResponse =
    await capitalsResponse.json();

  if (
    capitalsResult.error ||
    !Array.isArray(capitalsResult.data)
  ) {
    throw new Error("La API devolvió datos incorrectos");
  }

  return result.data.map((country) => {
    const countryCapital = capitalsResult.data.find(
      (item) => item.iso2 === country.iso2
    );

    return {
      iso2: country.iso2,
      name: {
        common: getSpanishCountryName(
          country.name,
          country.iso2
        ),
      },
      capital: countryCapital?.capital
        ? [getSpanishCapital(countryCapital.capital)]
        : [],
      region: (() => {
  const continent = lookup.byIso(country.iso2)?.continent;

  const regions: Record<string, string> = {
    Americas: "América",
    "North America": "América del Norte",
    "South America": "América del Sur",
    Europe: "Europa",
    Asia: "Asia",
    Africa: "África",
    Oceania: "Oceanía",
    Antarctica: "Antártida",
  };

  return continent ? regions[continent] || continent : "No disponible";
})(),
      flags: {
        png: country.flag,
        alt: `Bandera de ${country.name}`,
      },
    };
  });
}
