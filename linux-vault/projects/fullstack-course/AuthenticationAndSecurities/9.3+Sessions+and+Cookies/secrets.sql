
DROP TABLE users;

CREATE TABLE users (
    ID SERIAL NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    PRIMARY KEY(ID)
);

-- INSERT INTO SECRETS (USERNAME, SECRETS)
-- VALUES
--     ('antonio', 'password123'),
--     ('lucy', 'jfalsjdljasklds'),
--     ('robocop', 'passQWERTY123');

SELECT * FROM SECRETS;