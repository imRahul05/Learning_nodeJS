import Fastify from 'fastify'

const fastify = Fastify({
    logger:true
})


fastify.get('/',(req,reply)=>{
    reply.code(200).send({msg:"hello"})
})


const start = async () => {
    try {
        await fastify.listen({port:8001})
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()