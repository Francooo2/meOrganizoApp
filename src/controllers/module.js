const pool = require('../../db')

const getTasks = async (req, res, next) => {

    let id  = req.params.id
    
    const sql = 'SELECT * FROM tasks WHERE id_user=?'
    await pool.query(sql, id, (error, results) => {
        if (error) {
            req.messageError = 'Información de tareas no disponible.'
            return next()
        } else {
            req.task = results
            return next()
        }
    })
}

const createTask = async (req, res) => {

    let task     = req.body.task
    let priority = req.body.priority
    let date     = req.body.date.substring(0, req.body.date.lastIndexOf('T')) + ' ' + req.body.date.substring(req.body.date.lastIndexOf('T') + 1, req.body.date.length)
    let id_user  = req.params.id
    let status  = 'Pendiente'
    
    const sql = 'INSERT INTO tasks SET ?'

    const newTask = {
        task      : task,
        date_final: date,
        priority  : priority,
        status    : status,
        id_user   : id_user
    }

    await pool.query(sql, [newTask], (error, result) => {
        if (error) {
            res.status(500).render('error')
        } else {
            res.redirect(`/module/tasks/${req.user.id}`)
        }
    })
}

const getUpdateTask = async (req, res, next) => {
 
    const param = req.params.id
    
    const sql = 'SELECT * FROM tasks WHERE id = ?'
    await pool.query(sql, param, (error, result) => {
        if (error) {
            return res.status(500).render('error')
        } else {
            result[0].date_final = result[0].date_final.substring(0,10) + 'T' + result[0].date_final.substring(11, result[0].date_final.length)
            req.task = result
            return next()
        }
    })

}

const updateTask = async (req, res, next) => {

    const id       = req.params.id
    const task     = req.body.task
    const date     = req.body.date.substring(0, req.body.date.lastIndexOf('T')) + ' ' + req.body.date.substring(req.body.date.lastIndexOf('T') + 1, req.body.date.length)
    const priority = req.body.priority
    
    const update = [ task, date, priority, id ]
    const sql = 'UPDATE tasks SET task=?, date_final=?, priority=? WHERE id=?'
    
    await pool.query(sql, update, (error, result) => {
        if (error) {
            res.status(500).render('error')
        } else {
            res.redirect(`/module/tasks/${req.user.id}`)
        }
    })
    
}

const updateStatusOne = async (req, res) => {
    
    const status = 'Terminado'
    const id     = req.params.id
    const sql    = 'UPDATE tasks SET status=? WHERE id=?'

    const newStatus = [ status, id ]
    
    await pool.query(sql, newStatus, (error, result) => {
        if ( error ) {
            res.status(500).render('error')
        } else {
            res.status(204).send()
        }
    })
}

const updateStatusTwo = async (req, res) => {
    
    const status = 'Pendiente'
    const id     = req.params.id
    const sql    = 'UPDATE tasks SET status=? WHERE id=?'

    const newStatus = [ status, id ]
    
    await pool.query(sql, newStatus, (error, result) => {
        if ( error ) {
            res.status(500).render('error')
        } else {
            res.status(204).send()
        }
    })
}

const deleteTask = async (req, res) => {
    
    const param = req.params.id
    
    await pool.query('DELETE FROM tasks WHERE id=?', param, (error, result) => {
        if (error) {
            res.status(500).render('error')
        } else {
            res.redirect(`/module/tasks/${req.user.id}`)
        }
    })
}

module.exports = {
    getTasks,
    createTask,
    getUpdateTask,
    updateTask,
    updateStatusOne,
    updateStatusTwo,
    deleteTask
}