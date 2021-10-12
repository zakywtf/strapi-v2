'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    async findTypeMember(params, populate) {
        return await strapi.query('member').find(params, populate);
    },

    async countTotalEachTypeMember(params) {
        const total_hotel = await strapi.query('member').find({ type_member: 'hotel' })
        const total_restaurant = await strapi.query('member').find({ type_member: 'restaurant' })
        const total_pariwisata = await strapi.query('member').find({ type_member: 'pariwisata' })
        return [
            {
                type_member: 'hotel',
                total: total_hotel.length
            },
            {
                type_member: 'restaurant',
                total: total_restaurant.length
            },
            {
                type_member: 'pariwisata',
                total: total_pariwisata.length
            }
        ]
    },
};
