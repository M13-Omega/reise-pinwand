module.exports = async function (context, req) {
    const post = req.body;
    context.log('Neuer Beitrag:', post);
    context.res = {
        status: 200,
        body: `Beitrag von ${post.name} zum Reiseziel ${post.destination} wurde gespeichert.`
    };
};
