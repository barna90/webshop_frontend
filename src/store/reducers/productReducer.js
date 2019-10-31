import { GET_PRODUCT } from "../actions/actionTypes/productActions";

const productItems = [
  {
    id: 1,
    brandId: 1,
    name: "Női virágos melegítő együttes",
    internalName: "noi_viragos",
    oldPrice: 8900,
    price: 6900,
    inStock: null,
    categoryName: "Noi melegitok",
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131525",
        fileName: "IMG_20190915_131525.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131540",
        fileName: "IMG_20190915_131540.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131856",
        fileName: "IMG_20190915_131856.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Rózsaszín"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_131903.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Rózsaszín"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131908",
        fileName: "IMG_20190915_131908.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  },
  {
    id: 2,
    brandId: 2,
    name: "Obey noi gradiens melegítő együttes 1",
    internalName: "don_jon_gradiens_1",
    oldPrice: 7900,
    price: 6500,
    inStock: null,
    categoryName: "Noi melegitok",
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_131903.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  },
  {
    id: 3,
    brandId: 1,
    name: "Don Jon férfi melegítő együttes 2",
    internalName: "don_jon_ferfi_2",
    oldPrice: 8500,
    price: 5000,
    inStock: null,
    categoryName: "Ferfi melegitok",
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_131903.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  },
  {
    id: 4,
    brandId: 2,
    name: "Obey noi 3 reszes melegítő együttes",
    internalName: "obey_noi_3_reszes",
    oldPrice: 6900,
    price: 5900,
    inStock: null,
    categoryName: "Noi melegitok",
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_131903.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  },
  {
    id: 5,
    brandId: 1,
    name: "Don Jon férfi melegítő együttes 3",
    internalName: "don_jon_ferfi_3",
    oldPrice: 7500,
    price: 5500,
    inStock: null,
    categoryName: "Ferfi melegitok",
    image: [
      {
        id: 15,
        fileId: "IMG_20190915_131534",
        fileName: "IMG_20190915_131534.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Sárga"]
      },
      {
        id: 15,
        fileId: "IMG_20190915_131903",
        fileName: "IMG_20190915_13190.jpg",
        extension: "jpg",
        url: null,
        contentType: "image/jpeg",
        storageType: null,
        mediaType: null,
        enabled: true,
        directory: null,
        smallFileName: null,
        mediumFileName: null,
        largeFileName: null,
        extraLargeFileName: null,
        tags: ["Rózsaszín"]
      }
    ],
    sizes: { Sárga: ["M", "L", "XL", "XXL"], Rózsaszín: ["S", "M"] },
    colors: ["Sárga", "Rózsaszín"]
  }
];

const initialState = {
  product: null
};

const productReducer = (state = initialState, action) => {
  if (action.type === GET_PRODUCT) {
    return {
      ...state,
      product: productItems.find(item => item.id == action.id)
    };
  } else {
    return state;
  }
};
export default productReducer;
