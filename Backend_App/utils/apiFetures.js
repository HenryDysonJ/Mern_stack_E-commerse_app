class apiFetuares {
    constructor (query, queryStr){
      this.query = query,
      this.queryStr = queryStr
    }

    search(){
       let keyword = this.queryStr.keyword ? {
        name :{
            $regex: this.queryStr.keyword,
            $options: 'i'
        }
       } : {}

       this.query.find({...keyword});
       return this;
    }

   filter(){
    const copyQueryStr = {...this.queryStr};
    const removeQuery = ["keyword", "limit", "page"];
          removeQuery.forEach((feild)=> delete copyQueryStr[feild]);

    let queryStr = JSON.stringify(copyQueryStr);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g, match => `$${match}`);
    this.query.find(JSON.parse(queryStr));
    return this;
   }

   paginate(resPerPage){
      const currentPage = this.queryStr.page || 1;
      const skip = resPerPage * currentPage - 1;
      this.query.limit(resPerPage).skip(skip);
      return this
   }
}

module.exports = apiFetuares;