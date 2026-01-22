export const SortOrder = {
  ASC: 'asc',
  DESC: 'desc',
} as const

export type SortOrderType = (typeof SortOrder)[keyof typeof SortOrder]

export const Gender = {
  WOMEN: 'Women',
  MEN: 'Men',
  UNISEX: 'Unisex',
} as const

export type GenderType = (typeof Gender)[keyof typeof Gender]

export interface SearchFilters {
  searchTerm: string
  category: ProductCategoriesType | ''
  gender: GenderType | ''
  color: ProductColorsType | ''
  sortOrder: SortOrderType | ''
  brand: ProductBrandsType | ''
}

export const ProductCategories = {
  ACCESSORIES: 'Accessories',
  TOPS: 'Tops',
  FOOTWEAR: 'Footwear',
  ACTIVEWEAR: 'Activewear',
  BOTTOMS: 'Bottoms',
  DRESSES: 'Dresses',
  OUTERWEAR: 'Outerwear',
  SWIMWEAR: 'Swimwear',
  SUITS_BLAZERS: 'Suits & Blazers',
  LINGERIE_SLEEPWEAR: 'Lingerie & Sleepwear',
} as const

export type ProductCategoriesType =
  (typeof ProductCategories)[keyof typeof ProductCategories]

export const ProductColors = {
  PURPLE: 'Purple',
  ORANGE: 'Orange',
  BLUE: 'Blue',
  YELLOW: 'Yellow',
  WHITE: 'White',
  GREEN: 'Green',
  GRAY: 'Gray',
  BLACK: 'Black',
  BROWN: 'Brown',
  PINK: 'Pink',
  RED: 'Red',
} as const

export type ProductColorsType =
  (typeof ProductColors)[keyof typeof ProductColors]

export const ProductBrands = {
  URBAN_CHIC: 'UrbanChic',
  MINIMALIST: 'Minimalist',
  STREET_WEAR: 'StreetWear',
  PRADA: 'Prada',
  ASISAS: 'Asisas',
  LOUIS_VUITTON: 'Louis Vuitton',
  BALENCIAGA: 'Balenciaga',
  MANGO: 'Mango',
  GYM_CLARK: 'GymClark',
  ELEGANTE: 'Elegante',
  GUCCI: 'Gucci',
  NIKY: 'Niky',
  ZANA: 'Zana',
  CHANEL: 'Chanel',
} as const

export type ProductBrandsType =
  (typeof ProductBrands)[keyof typeof ProductBrands]

export const productCategoryOptions = Object.values(ProductCategories)
export const productColorOptions = Object.values(ProductColors)
export const SortOrderOptions = Object.values(SortOrder)
export const productBrandOptions = Object.values(ProductBrands)
export const GenderOptions = Object.values(Gender)
