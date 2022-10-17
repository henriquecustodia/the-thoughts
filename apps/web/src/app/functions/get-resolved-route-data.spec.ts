import { inject, Injectable, InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Thought } from '@cust/thoughts';
import { getResolvedRouteData } from './get-resolved-route-data';

const FUNCTION_PARAMS_TOKEN = new InjectionToken<string>('functionParams');

@Injectable()
class TestService {
    resolvedData = getResolvedRouteData(inject(FUNCTION_PARAMS_TOKEN));
}

describe('getResolvedData', () => {
    let mockedResolvedThought: Thought;
    let testService: TestService;
    let testBed: TestBed;

    beforeEach(async () => {
        mockedResolvedThought = {
            author: 'Test 1',
            text: 'Test'
        };

        const activatedRouteProvider = {
            provide: ActivatedRoute,
            useValue: {
                snapshot: {
                    data: {
                        thought: mockedResolvedThought
                    }
                }
            }
        }

        testBed = TestBed
            .configureTestingModule({
                providers: [
                    TestService,
                    activatedRouteProvider
                ]
            });

    });

    it('should return the resolved thought', () => {
        testBed.overrideProvider(FUNCTION_PARAMS_TOKEN, { useValue: 'thought' })

        testService = TestBed.inject(TestService);

        expect(testService.resolvedData).toEqual(mockedResolvedThought);
    });

    it('should return undefined', () => {
        testBed.overrideProvider(FUNCTION_PARAMS_TOKEN, { useValue: 'wrong-key' })

        testService = TestBed.inject(TestService);

        expect(testService.resolvedData).toBeUndefined();
    });
});
