import Subscription from "../models/subscriptions/Subscription.model";
import SubscriptionService from "../services/subscriptions/subscriptions.service";

jest.mock('../models/subscriptions/Subscription.model', () => {
    return {
        aggregate: jest.fn(),
    };
});

describe('SubscriptionService', () => {
    const subscriptionService = SubscriptionService();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('check for subscriptions with prices >= 50', async () => {
        const price = 50;

        (Subscription.aggregate as jest.Mock).mockResolvedValue([
            {
                business_id: '1',
                email: 'email1',
                plan_id: 'plan 1',
                plan: {
                    name: 'Freemium',
                    price: 50,
                },
                payment_platform: {
                    name: 'Payment Platform 1',
                },
            },
            {
                business_id: '2',
                email: 'email2',
                plan_id: 'plan 2',
                plan: {
                    name: 'Gold',
                    price: 70,
                },
                payment_platform: {
                    name: 'Payment Platform 2',
                },
            }
        ]);

        const result = await subscriptionService.getSubscriptionsPerPrice(price);

        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);

        // Test to check all prices are greater than 50
        expect(result.every((subscription) => subscription.plan_price >= price)).toBe(true);

        // Test to verify result structure based on key fields
        result.forEach((subscription) => {
            expect(subscription).toHaveProperty('business_id');
            expect(subscription).toHaveProperty('email');
            expect(subscription).toHaveProperty('plan_id');
            expect(subscription).toHaveProperty('plan_name');
            expect(subscription).toHaveProperty('plan_price');
            expect(subscription).toHaveProperty('payment_platform_name');
        });
    });
});
