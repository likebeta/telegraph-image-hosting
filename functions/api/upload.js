/**
 * POST /api/upload
 */
export async function onRequestPost(context) {
    const {request} = context;
    return await fetch('https://telegra.ph/upload', {
        method: 'POST',
        headers: request.headers,
        body: request.body
    });
}
