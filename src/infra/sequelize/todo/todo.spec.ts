import SequelizeHelper from '../helpers/sequelize-helper';

describe('Sequelize Todo Db Adapter', () => {
    beforeAll(() => {
        SequelizeHelper.connect();
    });
    afterAll(() => {
        SequelizeHelper.disconnect();
    });
});