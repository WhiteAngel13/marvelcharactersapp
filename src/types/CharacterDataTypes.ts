export type SectionResponseItems = {
  resourceURI: string,
  name: string,
} 

export type SectionResponse = {
  available: number,
  returned: number,
  collectionURI: string,
  items: Array<SectionResponseItems>
}


export type SectionResponseFormattedItem = {
  thumbnail: string,
  name: string,
  wikiUrl: string,
}

export type SectionResponseFormatted = {
  items: Array<SectionResponseFormattedItem>,
  collectionURI: string,
}

export type CharacterDataApi = {
  id: number,
  name: string,
  description: string,
  modified: Date,
  resourceURI: string,
  urls: Array<{
    type: string,
    url: string
  }>,
  thumbnail: {
    path: string,
    extension: string
  },
  comics: SectionResponse,
  stories: SectionResponse,
  events: SectionResponse,
  series: SectionResponse
}

export type CharacterData = {
  id: number,
  name: string,
  description: string,
  modified: Date,
  resourceURI: string,
  urls: Array<{
    type: string,
    url: string
  }>,
  thumbnail: string,
  comics: SectionResponseFormatted,
  stories: SectionResponseFormatted,
  events: SectionResponseFormatted,
  series: SectionResponseFormatted
}