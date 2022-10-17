import { Thought } from '@cust/thoughts';
import { routes } from './routes';

const mockedRandomThought: Thought = {
    author: 'test 1',
    text: 'test'
}

jest.mock('@cust/thoughts', () => ({
    getRandomThought: () => mockedRandomThought
}));

describe('Routes', () => {
    it('the route \'\' should resolve with a single thought', () => {
        const result =  (<any>routes[0].resolve).thought();
        
        expect(result).toEqual(mockedRandomThought);
    });

});
