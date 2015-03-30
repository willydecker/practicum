function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[2]) - 1,
                  Number(match[3]),
                  Number(match[1]));
}
print(findDate("30-1-2003"));
