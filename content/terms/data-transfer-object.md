---
title: "Data Transfer Object"
date: 2020-10-31
part-of-speech: noun
synonym: "DTO"
---

A data transfer object is a type of design pattern that enables a client to pass data with multiple attributes to the server. An advantage of this is that this reduces the number of calls that the client makes to the server, and thus decreases the computer resources being used and boosts performance.
 
## Example

> Below is a simple class that holds a user's information, and can act as a data transfer object.

```java
public class User {
	public final String name;
	public final String email;
	public final Integer phoneNumber;
	public final String country;

	public User(String name, String email, Integer phoneNumber, String country) {
		this.name = name;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.country = country;
	}
}
```

## Further Reading
- [Data Transfer Object design pattern on java-design-patterns repo](https://github.com/iluwatar/java-design-patterns/tree/master/data-transfer-object)
