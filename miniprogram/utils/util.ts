
export const handleStar = (str: string) => {
  const num = Math.floor(+str / 2);
  var arr = [];
  for(var i = 0; i < 5; i++){
    if(i < num){
      arr.push(1)
    }else{
      arr.push(0)
    }
  }
  return arr;
}

export function formatMovieList(data: any){
  return data.map((item: any) => {
    return {
      coverImg: item.cover,
      title: item.title,
      stars: handleStar(item.rate),
      score: item.rate
    }
  })
}

