import {Path, GET, POST, PathParam} from 'typescript-rest';
import {OK} from '../helpers/helper';

@Path('/product')
class ProductController {
    @GET
    product(): {message: string} {
        return OK({message: "Hi from product index"});
    }

    @Path(':name')
    @GET
    productByName(@PathParam('name') name: string): {message: string} {
        return OK({message: "Hi from product get by name " +name});
    }
    
    @POST
    postProduct(product: any): {message: string} {
        return OK({message: "Hi from product post " + product});
    }
}