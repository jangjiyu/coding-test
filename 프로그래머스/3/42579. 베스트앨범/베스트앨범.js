function solution(genres, plays) {
  let answer = [];
  let sumObj = {};
  let playsOfGenreObj = {};

  genres.forEach((g, idx) => {
    sumObj[g] = sumObj[g] ? sumObj[g] + plays[idx] : plays[idx];
    playsOfGenreObj[g] =
      playsOfGenreObj[g] && playsOfGenreObj[g].length
        ? [...playsOfGenreObj[g], [idx, plays[idx]]]
        : [[idx, plays[idx]]];
  });

  const sortedSumEntries = Object.entries(sumObj).sort(([, valueA], [, valueB]) => valueB - valueA);

  sortedSumEntries.forEach((e) => {
    const sortedSong = playsOfGenreObj[e[0]].sort(([, valueA], [, valueB]) => valueB - valueA);
    if(sortedSong[0]) answer.push(sortedSong[0][0]);
    if(sortedSong[1]) answer.push(sortedSong[1][0]);
  });

  return answer;
}
