declare module '@femessage/excel-it' {
  export const exportExcel: (
    {
      columns,
      data,
      fileName,
      header,
      merges
    }: {
      columns?: any[]
      data?: any[]
      fileName?: string
      header?: any
      merges?: any[]
    },
    callback?: () => void
  ) => void

  export const importExcel: (ignore?: any[], callback?: () => void) => void

  export const parseExcel: (
    file: any,
    ignore?: any[],
    callback?: () => void
  ) => void
}
