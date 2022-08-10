

    exports.createUser = async (req, res) => {

  //req.body.user_tipo
      // Create a Tutorial
      const usuario = {
        user_id: req.body.user_id,
        user_tipo: req.body.user_tipo,
      };



      // Save user in the database
       usuario.create(usuario)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });

  }




