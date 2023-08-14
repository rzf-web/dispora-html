/* ------------------------------------------------------------------------------
@name: CustomDate
@description: CustomDate
--------------------------------------------------------------------------------- */

// --- CustomDate
const CustomDate = (() => {
  // --- handleFormatDate
  const handleFormatDate = (currenrDate) => {
    var _day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var _mounth = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    var _date = new Date(currenrDate).getDate();
    var _xday = new Date(currenrDate).getDay();
    var _xmounth = new Date(currenrDate).getMonth();
    var _xyear = new Date(currenrDate).getYear();
    var _day = _day[_xday];
    var _mounth = _mounth[_xmounth];
    var _year = _xyear < 1000 ? _xyear + 1900 : _xyear;

    return _date + " " + _mounth + " " + _year;
  }

  // --- return
  return {
    config: handleFormatDate
  }

})();

export default CustomDate;
