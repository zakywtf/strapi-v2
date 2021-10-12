const { sanitizeEntity } = require('strapi-utils');

module.exports = {

    async findTypeMember(ctx) {
        const { type_member } = ctx.params;

        const entity = await strapi.services.member.find({ type_member: type_member });
        return sanitizeEntity(entity, { model: strapi.models.member });
    },
    
    async countTotalEachTypeMember(ctx) {
        return strapi.services.member.countTotalEachTypeMember(ctx.query);
    },
};