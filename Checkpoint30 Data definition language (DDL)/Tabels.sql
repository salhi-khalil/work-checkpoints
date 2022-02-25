CREATE TABLE Customer (
	customer_ID VARCHAR2(20) PRIMARY KEY,
	customer_Name VARCHAR2(20) NOT NULL,
	customer_ID NUMBER,
);
CREATE TABLE Product (
	product_ID VARCHAR2(20) PRIMARY KEY,
	product_Name VARCHAR2(20) NOT NULL,
	price NUMBER CHECK (price > 0)
);
CREATE TABLE Orders (
	CONSTRAINT fk_Orders1 FOREIGN KEY (customer_ID) REFERENCES Customer (customer_ID),
	CONSTRAINT fk_Orders2 FOREIGN KEY (product_ID) REFERENCES Product (product_ID),
    quantity NUMBER,
	total_Amount NUMBER,
);

	ALTER TABLE Product ADD Category VARCHAR2(20);

	ALTER TABLE Orders ADD Order_Date DATE DEFAULT SYSDATE();
