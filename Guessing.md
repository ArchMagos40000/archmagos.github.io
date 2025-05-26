# Random Number Guessing Game Flowchart

```mermaid
flowchart TD
    Start([Start]) --> Init[Initialize game variables\nGenerate random number between 1 and 100]
    Init --> Prompt[Prompt user for a guess]
    Prompt --> Validate{Is input a valid number?}
    Validate -- No --> Error[Display error message:\nPlease enter a valid number]
    Error --> Prompt
    Validate -- Yes --> Compare{Is guess equal to target number?}
    Compare -- Yes --> Correct[Display **Correct! You win!**]
    Compare -- No --> HighLow{Is guess greater than target number?}
    HighLow -- Yes --> High[Display "Too high! Try again."]
    HighLow -- No --> Low[Display "Too low! Try again."]
    High --> Prompt
    Low --> Prompt
    Correct --> End([End]
```
