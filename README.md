# Mars Rover Challange


### Commands
```bash
    curl --request POST \
    --url http://localhost:4001/commands \
    --header 'Content-Type: application/json' \
    --data '{
        "position": "1 2 N",
        "instructions": "LMLMLMLMM"
    }'
```
```bash
    curl --request POST \
    --url http://localhost:4001/commands \
    --header 'Content-Type: application/json' \
    --data '{
        "position": "3 3 E",
        "instructions": "MMRMMRMRRM"
    }'
```

### Run test
```
    $ yarn test
```