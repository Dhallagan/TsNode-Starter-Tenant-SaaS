import { BaseRoute } from './base-route';
import { UnitImageController } from '../controllers';
import { Authentication } from '../core/middleware/authentication';

export class UnitImageRoutes extends BaseRoute {
    unitImageController: UnitImageController;

    constructor() {
        super();
        this.unitImageController = new UnitImageController();

        this.initRoutes();
    }


    initRoutes() {
        this.router.get('/units/:id/images', (req, res, next) => this.unitImageController.getUnitImages(req, res).catch(next))
        this.router.post('/units/:id/images', Authentication.isAuthenticated, (req, res, next) => this.unitImageController.createUnitImages(req, res).catch(next));
        // Is the upload route necessary... I can't quite remember...
        this.router.post('/units/:id/upload', Authentication.isAuthenticated, (req, res, next) => this.unitImageController.uploadMultiple(req, res).catch(next));
        this.router.delete('/units/images/:imageKey', Authentication.isAuthenticated, (req, res, next) => this.unitImageController.deleteUnitImage(req, res).catch(next));
    }
}
