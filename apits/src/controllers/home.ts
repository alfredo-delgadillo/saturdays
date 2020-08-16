import {Path, GET} from 'typescript-rest';
import {OK} from '../helpers/helper';

@Path('/home')
class HomeController {
    
    @GET
    home(): {message: string} {
            return OK({ message: "Hi from home index" });
    }
}