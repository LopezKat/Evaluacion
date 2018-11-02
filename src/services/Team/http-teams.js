import { BASE_API, HTTP_TEAM } from '../config';
import httpBase from '../http-base';

class HttpTeam {

    async getTeams(){
        try {
            const url  = `${ BASE_API }${ HTTP_TEAM.getTeams }`
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getTeamsByName(strTeam){
        try {
            const url  = `${ BASE_API }${ HTTP_TEAM.getTeam }${strTeam}`;
            console.log(url);
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getTeamById(idTeam){
        try {
            const url  = `${ BASE_API }${ HTTP_TEAM.getTeamDetail }${idTeam}`;
            console.log(url);
            const data1 = await httpBase.baseGet(url, {});
            return data1;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpTeam;