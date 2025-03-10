import { GET_PRODUCT_LIST } from "../actions/actionTypes/productListActions";

const productItems = [
  {
    id: 1,
    brandId: 1,
    name: "Női virágos melegítő együttes",
    internalName: "noi_viragos",
    oldPrice: 8900,
    price: 6900,
    inStock: null,
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
    id: 2,
    brandId: 2,
    name: "Obey noi gradiens melegítő együttes 1",
    internalName: "don_jon_gradiens_1",
    oldPrice: 7900,
    price: 6500,
    inStock: null,
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
  },
  {
    id: 6,
    brandId: 1,
    name: "Női virágos melegítő együttes",
    internalName: "noi_viragos",
    oldPrice: 8900,
    price: 6900,
    inStock: null,
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
    id: 7,
    brandId: 2,
    name: "Obey noi gradiens melegítő együttes 1",
    internalName: "don_jon_gradiens_1",
    oldPrice: 7900,
    price: 6500,
    inStock: null,
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
    id: 8,
    brandId: 1,
    name: "Don Jon férfi melegítő együttes 2",
    internalName: "don_jon_ferfi_2",
    oldPrice: 8500,
    price: 5000,
    inStock: null,
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
    id: 9,
    brandId: 2,
    name: "Obey noi 3 reszes melegítő együttes",
    internalName: "obey_noi_3_reszes",
    oldPrice: 6900,
    price: 5900,
    inStock: null,
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
    id: 10,
    brandId: 1,
    name: "Don Jon férfi melegítő együttes 3",
    internalName: "don_jon_ferfi_3",
    oldPrice: 7500,
    price: 5500,
    inStock: null,
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

const initState = {
  productItems: []
};

const productListReducer = (state = initState, action) => {
  if (action.type === GET_PRODUCT_LIST) {
    return {
      ...state,
      productItems: productItems
    };
  } else {
    return state;
  }
};
export default productListReducer;
