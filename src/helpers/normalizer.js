
const normalize = (array) => {
    const res = [...array];
    res.map((item,idx)=>{
        const hospital = item.HospitalName.split('-');
        item['key'] = idx;
        item['propinsi'] = hospital[0];
        item['kabupaten'] = hospital[1];
        item['namaWahana'] = hospital[2];
        return item;
    })
    return res;
}
export default normalize;