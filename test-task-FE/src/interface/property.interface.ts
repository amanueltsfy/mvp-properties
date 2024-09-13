export interface PropertyInitState {
  currentPage: number;
  totalPages: number;
  total: number;
  pageSize: number;
  properties: Property[];
  isFetchingProperties: boolean;
}

export interface Property {
  id: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
  type: string;
  order: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  propertyID: string;
}

export interface SearchProperty {
  location: string;
  maxPrice: string;
  bedrooms: string;
  type: string;
  order: string;
}

export interface SearchPropertyPayload {
  location?: string;
  maxPrice?: string;
  bedroom?: string;
  bathrooms?: string;
  page?: number;
  limit?: number;
}
