import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
/** Get details on a all companies. */

  static async getCompanies(filter){
    let data = {}
    if (filter){
      data = {name:filter}
    }
    let res = await this.request(`companies`, data);
    return res.companies;

  }

  /** Get details on a all jobs. */

    static async getJobs(filter){
      let data = {}
      if (filter){
        data = {title:filter}
      }
    let res = await this.request(`jobs`, data );
    return res.jobs;
  }
    /**register website */

  static async register(values){
    
    let data = {
      username:values.username,
      password:values.password,
      firstName:values.firstName,
      lastName:values.lastName,
      email:values.email
    }

    let res = this.request('auth/register', data, 'post' )
  return res  }

    /** login. */

  static async login({username,password}){
    

    let data = {
      username:username,
      password:password,
    }
    
      let res = this.request('auth/token', data, 'post' )
      
      return res
      
  }

  static async getUser(testuser){

    let res = this.request(`users/${testuser}`)

    return res

  }


  static async apply(values){
    console.log(values)
    const {username, jobId} = values;
    const data = {username:username, id:jobId}

    let res = this.request(`users/${username}/jobs/${jobId}`, data, 'post')
    return res

  }
 
  static async update (username,data){
   

  
    let res = this.request(`users/${username}`, data, 'patch')
    console.log(res)
    return res.user



  }


}
// for now, put token ("testuser" / "password" on class)



export default JoblyApi;