import { Router } from 'express'
import multer from 'multer';

//Controllers do usuários
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

//Controllers das Campanhas
import { CreateCampanhaController } from './controllers/campanha/CreateCampanhaController';
import { ListCampanhaController } from './controllers/campanha/ListCampanhaController';

//Controllers dos Personagens
import { CreatePersonagemController } from './controllers/personagens/CreatePersonagemController';
import { ListPersonagemController } from './controllers/personagens/ListPersonagemController';
import { DeletePersonagemController } from './controllers/personagens/DeletePersonagemController';
import { UpdatePersonagemController } from './controllers/personagens/UpdatePersonagemController';

//Controllers dos itens
import { CreateItensController } from './controllers/personagens/inventario/CreateItensController';
import { ListItensController } from './controllers/personagens/inventario/ListItensController';
import { DeleteItensController } from './controllers/personagens/inventario/DeleteItensController';
import { DeleteAllItensController } from './controllers/personagens/inventario/DeleteAllItensController';

//Controllers dos Atributos
import { CreateAtributosController } from './controllers/personagens/atributos/CreateAtributoController';
import { ListAtributosController } from './controllers/personagens/atributos/ListAtributosController';
import { DeleteAtributosController } from './controllers/personagens/atributos/DeleteAtributosController';

//Middleware de autenticidade
import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//rotas dos users
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/about', isAuthenticated, new DetailUserController().handle)

//rotas das campanhas
router.post('/campanha', isAuthenticated, upload.single('file'), new CreateCampanhaController().handle)
router.get('/campanha', isAuthenticated, new ListCampanhaController().handle)

//rota dos personagens
router.post('/personagem', isAuthenticated, upload.single('file'), new CreatePersonagemController().handle)
router.get('/campanha/personagens', isAuthenticated, new ListPersonagemController().handle)
router.delete('/campanha/personagens/delete', isAuthenticated, new DeletePersonagemController().handle)
router.put('/personagem/update', isAuthenticated, new UpdatePersonagemController().handle)

//rota dos itens
router.post('/personagem/itens', isAuthenticated, new CreateItensController().handle)
router.get('/personagem/itens', isAuthenticated, new ListItensController().handle)
router.delete('/personagem/itens/delete', isAuthenticated, new DeleteItensController().handle)
router.delete('/personagem/itens/deleteAll', isAuthenticated, new DeleteAllItensController().handle)

//rotas dos atributos
router.post('/personagem/atributos', isAuthenticated, new CreateAtributosController().handle)
router.get('/personagem/atributos', isAuthenticated, new ListAtributosController().handle)
router.delete('/personagem/atributos/delete', isAuthenticated, new DeleteAtributosController().handle)

export { router };