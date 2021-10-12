const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async create(ctx) {
        let entity;
        entity = await strapi.services.contactus.create(ctx.request.body);

        const mailOptions = {
            from: ctx.request.body.name + ' <' + ctx.request.body.email + '>',
            to: 'zakywtf@gmail.com',
            subject: "Enquiry from " + ctx.request.body.name,
            text: ctx.request.body.message,
            html: `
                <p>Name: ${ctx.request.body.name}</p>
                <p>Email: ${ctx.request.body.email}</p>
                <p>Contact No: ${ctx.request.body.phone_number}</p>
                <p>${ctx.request.body.message}</p>
            `
        }
        strapi.services.email.send(mailOptions)

        return sanitizeEntity(entity, { model: strapi.models.contactus });
    },
};