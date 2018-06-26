SELECT * FROM cart
JOIN events
ON events.id = cart.eventid
where cart.userid = $1;
