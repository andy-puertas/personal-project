DELETE FROM cart
WHERE userid = $1
returning *;
