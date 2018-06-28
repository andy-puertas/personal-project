DELETE FROM cart
WHERE userid = $1 AND eventid = $2;