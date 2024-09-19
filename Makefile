# Directories
GO_DIR ?= node/src
PYTHON_DIR ?= core/src
FRONTEND_DIR ?= quantumfuse_dapp

# Common Variables
PROTOTOOL ?= protoc
CACHE_DIR ?= ~/.cache/quantumfuse

# Targets
.PHONY: all setup build run test clean update install-protoc help \
        setup-go build-go run-go test-go clean-go update-go \
        setup-python build-python run-python test-python clean-python update-python \
        setup-node build-node run-node clean-node update-node \
        cache

# Default target
all: setup build

# Help target to display available commands
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  all            - Set up and build the project."
	@echo "  setup          - Set up all components."
	@echo "  build          - Build all components."
	@echo "  run            - Run all components."
	@echo "  test           - Run tests for all components."
	@echo "  clean          - Clean up all build artifacts."
	@echo "  update         - Update all dependencies."
	@echo "  install-protoc - Install protobuf compiler (protoc)."
	@echo "  cache          - Set up caching for dependencies."
	@echo "  help           - Display this help message."
	@echo ""
	@echo "Component-specific targets (use with 'make component-target'):"
	@echo "  go, python, node - setup, build, run, test, clean, update"

# Main Targets
setup: setup-go setup-python setup-node
build: build-go build-python build-node
run: run-go run-python run-node
test: test-go test-python
clean: clean-go clean-python clean-node
update: update-go update-python update-node
cache: cache

# Go targets
setup-go:
	@echo "Setting up Go environment..."
	@go mod tidy -C $(GO_DIR)

build-go: setup-go
	@echo "Building Go project..."
	@go build -o $(GO_DIR)/QuantumFuseNode $(GO_DIR)/main.go

run-go: build-go
	@echo "Running Go project..."
	@$(GO_DIR)/QuantumFuseNode

test-go: setup-go
	@echo "Testing Go project..."
	@(cd $(GO_DIR) && go test -v -cover ./...)

clean-go:
	@echo "Cleaning Go build..."
	@rm -f $(GO_DIR)/QuantumFuseNode

update-go: setup-go
	@echo "Updating Go dependencies..."
	@go get -u -C $(GO_DIR)

# Python targets
setup-python:
	@echo "Setting up Python environment..."
	@pip install -r $(PYTHON_DIR)/requirements.txt

build-python: setup-python
	@echo "Building Python project..."
	@echo "Python project does not require explicit build."

run-python: setup-python
	@echo "Running Python API..."
	@python $(PYTHON_DIR)/quantumfuse_core_main.py

test-python:
	@echo "Running Python tests..."
	@pytest $(PYTHON_DIR)

clean-python:
	@echo "Cleaning Python environment..."
	@find $(PYTHON_DIR) -name "*.pyc" -exec rm -f {} \;

update-python:
	@echo "Updating Python dependencies..."
	@pip install --upgrade -r $(PYTHON_DIR)/requirements.txt

# Node.js
setup-node:
	@echo "Setting up Node.js environment..."
	@npm install --prefix $(FRONTEND_DIR)

build-node: setup-node
	@echo "Building Node.js frontend..."
	@npm run build --prefix $(FRONTEND_DIR)

run-node: setup-node
	@echo "Running Node.js frontend..."
	@npm start --prefix $(FRONTEND_DIR)

clean-node:
	@echo "Cleaning Node.js environment..."
	@rm -rf $(FRONTEND_DIR)/node_modules

update-node:
	@echo "Updating Node.js dependencies..."
	@npm update --prefix $(FRONTEND_DIR)

# Cache dependencies
cache:
	mkdir -p $(CACHE_DIR)
	@echo "Caching dependencies..."
