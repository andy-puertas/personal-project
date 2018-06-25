-- Creating tables


-- CREATE TABLE users (  
--     id SERIAL PRIMARY KEY,
--     email varchar(25),
--     password varchar(25),
--     
-- )


-- CREATE TABLE events (
--     id SERIAL PRIMARY KEY,
--     artist TEXT,
--     date TEXT,
--     time TEXT,
--     img TEXT
-- )

-- CREATE TABLE cart (
--     id SERIAL PRIMARY KEY,
--     eventID INTEGER,     
--     quantity INTEGER DEFAULT 1,
--     FOREIGN KEY () REFERENCES
--     FOREIGN KEY () REFERENCES
-- )



-- Other example for cart

-- CREATE TABLE cartItems ()
--     product_id FOREIGN KEY
--     user_id FOREIGN KEY 
--     quantity INTEGER default 1   
-- )


-- Updating cart

-- UPDATE cart
-- SET quantity = $1
-- WHERE id = $2


-- Order example

-- CREATE TABLE orders (
--     id PRIMARY KEY
--     time timestamp
--     userID FOREIGN KEY
-- )


-- Sold tickets example

-- CREATE TABLE soldItems (
--     id PRIMARY KEY
--     order_ID FOREIGN KEY
--     event_ID FOREIGN KEY
-- )


-- Join examples (maybe???)

-- SELECT * FROM cart
-- JOIN events ON events.id = cart.eventID
-- WHERE cart.userID = $1



-- Adding events

-- INSERT INTO events (artist, date, time, img, eventinfo)
-- VALUES ('', '', '', '', '')



-- Quantity check

-- SELECT c.*, count(*) AS quantity, p .*
-- FROM cart c
-- JOIN products p ON p.ID = c.events_ID
-- WHERE c.user_ID = $1
-- GROUP BY  c.event_ID


-- Deleting from cart (maybe??)

-- DELETE FROM cart
-- WHERE id = $1

-- DELETE
-- FROM cart
-- where