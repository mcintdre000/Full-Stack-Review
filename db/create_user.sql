INSERT INTO users ( auth0_id, name, email, photo )
VALUES ( ${auth0_id}, ${name}, ${email}, ${photo} )
RETURNING *;