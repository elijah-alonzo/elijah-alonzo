# Essential Coding Principles

*   **DRY (Don't Repeat Yourself):** Avoid duplicating logic; every piece of knowledge should have a single, unambiguous representation.
*   **KISS (Keep It Simple, Stupid):** Prioritize simplicity over complexity; avoid over-engineering solutions.
*   **YAGNI (You Aren't Gonna Need It):** Don't implement functionality until it is actually required.
*   **SOLID Principles:**
    *   **Single Responsibility:** A class should have one, and only one, reason to change.
    *   **Open/Closed:** Software entities should be open for extension but closed for modification.
    *   **Liskov Substitution:** Subtypes must be substitutable for their base types without breaking the program.
    *   **Interface Segregation:** No client should be forced to depend on methods it does not use.
    *   **Dependency Inversion:** Depend on abstractions (interfaces), not on concrete implementations.
*   **Separation of Concerns:** Divide your code into distinct sections, each addressing a specific aspect of the program's functionality.
*   **Clean Naming:** Use descriptive, intention-revealing names to make the code self-documenting.
*   **Composition Over Inheritance:** Prefer combining simple objects to achieve polymorphic behavior rather than building complex class hierarchies.
*   **Fail Fast:** Design code to report errors immediately at the point of failure to simplify debugging.
*   **Least Astonishment:** Ensure that the code's behavior is predictable and doesn't surprise other developers.
*   **Law of Demeter:** A module should not know about the inner workings of the objects it manipulates ("don't talk to strangers").
