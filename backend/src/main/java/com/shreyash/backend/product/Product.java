package com.shreyash.backend.product;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Product {
    private String name;
    private int price;
    private String URL;
    private String imageurl;

    public Product(@JsonProperty("name") String name, @JsonProperty("price") int price, @JsonProperty("url") String URL, @JsonProperty("imageurl") String imageurl) {
        this.name = name;
        this.price = price;
        this.URL = URL;
        this.imageurl = imageurl;
    }

    public String getImageURL() {
        return this.imageurl;
    }

    public void setImageURL(String imageURL) {
        this.imageurl = imageURL;
    }

    public String getURL() {
        return this.URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return this.price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product{" +
                "name='" + name + '\'' +
                ", price=" + price +
                ", URL='" + URL + '\'' +
                ", imageurl='" + imageurl + '\'' +
                '}';
    }
}
