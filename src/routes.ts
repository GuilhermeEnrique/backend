import express, { Router } from 'express';
import path from 'path';
import multer from 'multer';
//Controllers do usuários
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdatePasswordController } from './controllers/user/UpdatePasswordController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
//Controllers das Campanhas
import { CreateCampanhaController } from './controllers/campanha/CreateCampanhaController';
import { ListCampanhaController } from './controllers/campanha/ListCampanhaController';
import { UpdateCampanhaController } from './controllers/campanha/UpdateCampanhaController';
import { DeleteCamapanhaController } from './controllers/campanha/DeleteCampanhaController';
//Controllers dos Personagens
import { CreatePersonagemController } from './controllers/personagens/CreatePersonagemController';
import { ListPersonagemController } from './controllers/personagens/ListPersonagemController';
import { UpdatePersonagemController } from './controllers/personagens/UpdatePersonagemController';
import { DeletePersonagemController } from './controllers/personagens/DeletePersonagemController';
//controller dos dados
import { DiceController } from './controllers/dados/DiceController';
//Controller das imagem
import { ProfileImageController } from "./controllers/imagem/ProfileImageController";
import { DeleteImageController } from './controllers/imagem/DeleteImagemController';
//Controllers dos itens
import { CreateItensController } from './controllers/personagens/inventario/CreateItensController';
import { ListItensController } from './controllers/personagens/inventario/ListItensController';
import { UpdateInventarioController } from './controllers/personagens/inventario/UpdateInventarioController';
import { DeleteItensController } from './controllers/personagens/inventario/DeleteItensController';
import { DeleteAllItensController } from './controllers/personagens/inventario/DeleteAllItensController';
//Controllers dos Atributos
import { CreateAtributosController } from './controllers/personagens/atributos/CreateAtributoController';
import { ListAtributosController } from './controllers/personagens/atributos/ListAtributosController';
import { DeleteAtributosController } from './controllers/personagens/atributos/DeleteAtributosController';
import { UpdateAtributosController } from './controllers/personagens/atributos/UpdateAtributosController';
//Middleware de autenticidade
import { isAuthenticated } from './middlewares/isAuthenticated';
//importar Configurações do multer
import uploadConfig from './config/multer'

const router = Router();

const uploadProfile = multer(uploadConfig.upload("./uploads/profile"));
const uploadCampaign = multer(uploadConfig.upload("./uploads/campaign"));
const uploadCharacter = multer(uploadConfig.upload("./uploads/character"));

router.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

//rotas dos users
router.post('/create-user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/about', isAuthenticated, new DetailUserController().handle)
router.put('/reset-password', isAuthenticated, new UpdatePasswordController().handle)
router.put('/update-user:userId', isAuthenticated, uploadProfile.single('file'), new UpdateUserController().handle)

//rotas das campanhas
router.post('/create-campanha', isAuthenticated, uploadCampaign.single('file'), new CreateCampanhaController().handle)
router.get('/listen-campanha', isAuthenticated, new ListCampanhaController().handle)
router.put('/update-campanha', isAuthenticated, uploadCampaign.single('file'), new UpdateCampanhaController().handle)
router.delete('/delete-campanha', isAuthenticated, new DeleteCamapanhaController().handle)

//rota dos personagens
router.post('/create-personagem', isAuthenticated, uploadCharacter.single('file'), new CreatePersonagemController().handle)
router.get('/listen-personagens', isAuthenticated, new ListPersonagemController().handle)
router.put('/update-personagem', isAuthenticated, uploadCharacter.single('file'), new UpdatePersonagemController().handle)
router.delete('/delete-personagem', isAuthenticated, new DeletePersonagemController().handle)

//rota de upload das imagens
router.get('/profile/image', isAuthenticated, new ProfileImageController().handle);

//dados
router.post('/roll', DiceController.handleRoll);

//rota dos itens
router.post('/create-inventario', isAuthenticated, new CreateItensController().handle)
router.get('/listen-inventario', isAuthenticated, new ListItensController().handle)
router.put('/update-inventario', isAuthenticated, new UpdateInventarioController().handle)
router.delete('/delete-item', isAuthenticated, new DeleteItensController().handle)
router.delete('/deleteAll-itens', isAuthenticated, new DeleteAllItensController().handle)

//rotas dos atributos
router.post('/create-atributos', isAuthenticated, new CreateAtributosController().handle)
router.get('/listen-atributos', isAuthenticated, new ListAtributosController().handle)
router.delete('/delete-atributos', isAuthenticated, new DeleteAtributosController().handle)
router.put('/update-atributos', isAuthenticated, new UpdateAtributosController().handle)

export { router };