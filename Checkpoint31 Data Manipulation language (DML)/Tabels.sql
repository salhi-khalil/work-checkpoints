CREATE TABLE Customer (
	customer_ID VARCHAR2(20) PRIMARY KEY,
	customer_Name VARCHAR2(20) NOT NULL,
	customer_Tel NUMBER,
);
CREATE TABLE Product (
	product_ID VARCHAR2(20) PRIMARY KEY,
	product_Name VARCHAR2(20) NOT NULL,
	category VARCHAR2(20),
	price NUMBER CHECK (price > 0)
);
CREATE TABLE Orders (
	CONSTRAINT fk_Orders1 FOREIGN KEY (customer_ID) REFERENCES Customer (customer_ID),
	CONSTRAINT fk_Orders2 FOREIGN KEY (product_ID) REFERENCES Product (product_ID),
    quantity NUMBER,
	total_Amount NUMBER,
	Order_Date DATE DEFAULT SYSDATE()
);

//Insert

INSERT INTO Product
(
product_ID,
product_Name,
category,
price
)
VALUES
(
"P01",
"Samsung Galaxy S20",
"Smartphone",
3299
);

INSERT INTO Product VALUES
(
"P02",
"ASUS Notebook",
"PC",
4599
);

INSERT INTO Customer VALUES
(
"C01",
"ALI",
71321009
);

INSERT INTO Customer VALUES
(
"C02",
"ASMA",
77345823
);

INSERT INTO Orders (customer_ID)
SELECT customer_ID from Customer;

INSERT INTO Orders (product_ID)
SELECT product_ID from Product;

INSERT INTO Orders 
(
quantity,
total_Amount
)
VALUES
(
2,
9198
);

INSERT INTO Orders (customer_ID)
SELECT customer_ID from Customer;

INSERT INTO Orders (product_ID)
SELECT product_ID from Product;

INSERT INTO Orders 
(
Order_Date
quantity,
total_Amount
)
VALUES
(
28/05/2020,
1,
3299
);