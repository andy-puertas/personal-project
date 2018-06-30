UPDATE cart
SET quantity = $1
WHERE userid = $2
AND eventid = $3
RETURNING *

