export const useFilterIcons = async (check1, check2, search) => {
  const price = check1 === "All prices" ? "" : check1 === "free" ? false : true
  const response = await fetch(
    `  https://api.iconfinder.com/v4/icons/search?query=${
      search || "home"
    }&count=100&premium=${price}&style=${check2 || "outline"}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer 4o9Y745juM7tF4zsinZMIpfCNwKTrPnRbW0tdwicqbNGAjHhsAjU1P0CtCbkVTJJ",
      },
    }
  )
  const json = await response.json()
  return json
}
