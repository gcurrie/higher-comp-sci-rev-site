/* ── Search — Higher Computing Science ────────────────────── */
(function () {
  /* Determine root prefix the same way nav.js does */
  const ROOT = (function () {
    const depth = document.documentElement.dataset.depth || '0';
    return '../'.repeat(parseInt(depth, 10));
  })();

  /* ── Search Index ────────────────────────────────────────── */
  const INDEX = [

    /* ── SDD: Analysis ─── */
    { term: 'Analysis', desc: 'Stage where purpose, scope, boundaries and functional requirements are identified', page: 'sdd/analysis.html', section: 'SDD' },
    { term: 'Purpose', desc: 'A plain-language statement of what the software will do and for whom', page: 'sdd/analysis.html', section: 'SDD' },
    { term: 'Scope', desc: 'What the system will and will not do — establishes boundaries of the project', page: 'sdd/analysis.html', section: 'SDD' },
    { term: 'Functional requirements', desc: 'The specific inputs, processes and outputs a software system must provide', page: 'sdd/analysis.html', section: 'SDD' },
    { term: 'End-user requirements', desc: 'Specific needs of the people who will use the software — usability, accessibility', page: 'sdd/analysis.html', section: 'SDD' },
    { term: 'Inputs', desc: 'Data entered into a system by the user or from external sources', page: 'sdd/analysis.html', section: 'SDD' },
    { term: 'Processes', desc: 'Actions or calculations performed on data within a system', page: 'sdd/analysis.html', section: 'SDD' },
    { term: 'Outputs', desc: 'Results, reports or displays produced by a system', page: 'sdd/analysis.html', section: 'SDD' },
    { term: 'Scope creep', desc: 'Uncontrolled growth of a project beyond its original scope', page: 'sdd/analysis.html', section: 'SDD' },

    /* ── SDD: Development Methodologies ─── */
    { term: 'Iterative development', desc: 'Building software through repeated cycles of design, implement, test — refining each time', page: 'sdd/development-methodologies.html', section: 'SDD' },
    { term: 'Agile', desc: 'Iterative methodology using short sprints, close client collaboration and flexible requirements', page: 'sdd/development-methodologies.html', section: 'SDD' },
    { term: 'Sprint', desc: 'Short development cycle (1–4 weeks) in agile methodology producing a working increment', page: 'sdd/development-methodologies.html', section: 'SDD' },
    { term: 'Software development process', desc: 'Analysis → Design → Implementation → Testing → Evaluation → Maintenance', page: 'sdd/development-methodologies.html', section: 'SDD' },
    { term: 'Maintenance', desc: 'Fixing bugs and updating software after it has been released', page: 'sdd/development-methodologies.html', section: 'SDD' },
    { term: 'Prototype', desc: 'Early working version of software used to demonstrate or test ideas', page: 'sdd/development-methodologies.html', section: 'SDD' },

    /* ── SDD: Design ─── */
    { term: 'Structure diagram', desc: 'Shows modular decomposition of a program as a hierarchy of boxes with data flow', page: 'sdd/design-notations.html', section: 'SDD' },
    { term: 'Pseudocode', desc: 'Language-independent notation for describing an algorithm before coding', page: 'sdd/design-notations.html', section: 'SDD' },
    { term: 'Wireframe', desc: 'Low-fidelity sketch of a user interface showing layout without colour or styling', page: 'sdd/design-notations.html', section: 'SDD' },
    { term: 'Modular decomposition', desc: 'Breaking a program down into smaller, manageable sub-modules', page: 'sdd/design-notations.html', section: 'SDD' },
    { term: 'Stepwise refinement', desc: 'Expanding a module in a structure diagram into its component sub-steps', page: 'sdd/design-notations.html', section: 'SDD' },
    { term: 'Data flow', desc: 'Annotations on structure diagrams showing parameters passed between modules', page: 'sdd/design-notations.html', section: 'SDD' },
    { term: 'Top-level design', desc: 'The highest-level structure diagram showing main modules without detail', page: 'sdd/design-notations.html', section: 'SDD' },

    /* ── SDD: Data Types ─── */
    { term: 'Integer', desc: 'Whole number data type — no decimal point', page: 'sdd/data-types.html', section: 'SDD' },
    { term: 'Real', desc: 'Floating-point number data type — stores decimals', page: 'sdd/data-types.html', section: 'SDD' },
    { term: 'Boolean', desc: 'Data type storing only TRUE or FALSE', page: 'sdd/data-types.html', section: 'SDD' },
    { term: 'Character', desc: 'Single letter, digit or symbol data type', page: 'sdd/data-types.html', section: 'SDD' },
    { term: 'String', desc: 'Sequence of characters treated as a single unit', page: 'sdd/data-types.html', section: 'SDD' },
    { term: 'Variable', desc: 'Named memory location used to store a value that can change', page: 'sdd/data-types.html', section: 'SDD' },

    /* ── SDD: Data Structures ─── */
    { term: 'Array', desc: 'Fixed-size collection of elements of the same data type, accessed by index', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: '1D array', desc: 'A list of values of the same type stored under one variable name', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Parallel arrays', desc: 'Two or more 1D arrays where the same index links related data about the same item', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Parallel 1D arrays', desc: 'Multiple arrays where index position links related data across arrays', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Record', desc: 'Collection of named fields that can each hold a different data type', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Arrays of records', desc: 'A 1D array where each element is a record — stores a list of complex items', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Array of records', desc: 'Data structure combining arrays and records — accessed with index and field name', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Index', desc: 'Position of an element in an array — most languages start at 0', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Field', desc: 'A single named item within a record, e.g. student.name', page: 'sdd/data-structures.html', section: 'SDD' },

    /* ── SDD: Computational Constructs ─── */
    { term: 'Subprogram', desc: 'Named block of reusable code — a procedure or function', page: 'sdd/modular-programming.html', section: 'SDD' },
    { term: 'Procedure', desc: 'Subprogram that performs an action but does not return a value', page: 'sdd/modular-programming.html', section: 'SDD' },
    { term: 'Function', desc: 'Subprogram that performs a calculation and returns a value via RETURN', page: 'sdd/modular-programming.html', section: 'SDD' },
    { term: 'Formal parameter', desc: 'Named placeholder in a subprogram definition that receives the passed value', page: 'sdd/modular-programming.html', section: 'SDD' },
    { term: 'Actual parameter', desc: 'The real value or variable passed in when calling a subprogram', page: 'sdd/modular-programming.html', section: 'SDD' },
    { term: 'Parameter passing', desc: 'Passing data into a subprogram using formal and actual parameters', page: 'sdd/modular-programming.html', section: 'SDD' },
    { term: 'Local variable', desc: 'Variable declared inside a subprogram — only accessible within it', page: 'sdd/modular-programming.html', section: 'SDD' },
    { term: 'Global variable', desc: 'Variable declared outside subprograms — accessible throughout the program', page: 'sdd/modular-programming.html', section: 'SDD' },
    { term: 'Scope', desc: 'Where in a program a variable can be accessed — local or global', page: 'sdd/modular-programming.html', section: 'SDD' },
    { term: 'File handling', desc: 'Reading from and writing to text or CSV files using OPEN, RECEIVE, SEND, CLOSE', page: 'sdd/file-handling.html', section: 'SDD' },
    { term: 'Sequential file access', desc: 'Reading a file from start to finish in order — the Higher file access method', page: 'sdd/file-handling.html', section: 'SDD' },
    { term: 'EOF', desc: 'End of File marker — used in WHILE NOT EOF loops when reading files', page: 'sdd/file-handling.html', section: 'SDD' },
    { term: 'CSV', desc: 'Comma-Separated Values — a plain text file format storing tabular data', page: 'sdd/file-handling.html', section: 'SDD' },

    /* ── SDD: Standard Algorithms ─── */
    { term: 'Standard algorithm', desc: 'One of three pre-defined Higher algorithms: linear search, find min/max, count occurrences', page: 'sdd/standard-algorithms.html', section: 'SDD' },
    { term: 'Linear search', desc: 'Searches every element one at a time from first to last — Higher standard algorithm', page: 'sdd/standard-algorithms.html', section: 'SDD' },
    { term: 'Find minimum', desc: 'Scans entire array tracking the index of the smallest value seen', page: 'sdd/standard-algorithms.html', section: 'SDD' },
    { term: 'Find maximum', desc: 'Scans entire array tracking the index of the largest value seen', page: 'sdd/standard-algorithms.html', section: 'SDD' },
    { term: 'Count occurrences', desc: 'Counts how many times a target value appears in an array', page: 'sdd/standard-algorithms.html', section: 'SDD' },

    /* ── SDD: Testing & Debugging ─── */
    { term: 'Syntax error', desc: 'Mistake in the grammar of the language — caught by the translator before running', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Execution error', desc: 'Error that occurs while the program is running — causes it to crash (e.g. division by zero)', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Logic error', desc: 'Program runs without crashing but produces incorrect results', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Normal data', desc: 'Typical valid test input the program should accept and process correctly', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Extreme data', desc: 'Valid test data at the very edge of the accepted range — boundary values', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Exceptional data', desc: 'Invalid test data the program should reject with an error message', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Test plan', desc: 'Comprehensive document listing test data, expected outputs and actual results', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Trace table', desc: 'Table used to record variable values at each step of a dry run', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Dry run', desc: 'Manually tracing through code on paper tracking variable values', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Breakpoint', desc: 'A pause point set in a debugger at a specific line — allows inspection of all variables', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Watchpoint', desc: 'Debugger tool that pauses execution when a specific variable changes to a particular value', page: 'sdd/testing-debugging.html', section: 'SDD' },
    { term: 'Debugging', desc: 'Finding and fixing errors using trace tables, dry runs, breakpoints and watchpoints', page: 'sdd/testing-debugging.html', section: 'SDD' },

    /* ── SDD: Evaluation ─── */
    { term: 'Fitness for purpose', desc: 'Does the program meet all its original requirements?', page: 'sdd/evaluation.html', section: 'SDD' },
    { term: 'Efficient use of coding constructs', desc: 'Using loops, arrays and subprograms appropriately — avoiding repetition', page: 'sdd/evaluation.html', section: 'SDD' },
    { term: 'Usability', desc: 'How easy the software is for its intended users — clear prompts, helpful errors', page: 'sdd/evaluation.html', section: 'SDD' },
    { term: 'Maintainability', desc: 'How easy it is to update or modify the code — meaningful names, modular structure', page: 'sdd/evaluation.html', section: 'SDD' },
    { term: 'Robustness', desc: 'Does the program handle invalid or unexpected input without crashing?', page: 'sdd/evaluation.html', section: 'SDD' },
    { term: 'Evaluation', desc: 'Assessing a solution against five criteria: fitness for purpose, efficiency, usability, maintainability, robustness', page: 'sdd/evaluation.html', section: 'SDD' },

    /* ── DDD: Analysis ─── */
    { term: 'Entity', desc: 'Real-world object about which data is stored — becomes a table', page: 'ddd/analysis.html', section: 'DDD' },
    { term: 'Attribute', desc: 'A piece of information stored about an entity — becomes a column/field', page: 'ddd/analysis.html', section: 'DDD' },
    { term: 'Relationship', desc: 'A link between two entities showing how they are associated', page: 'ddd/analysis.html', section: 'DDD' },
    { term: 'One-to-many', desc: 'One record in a table links to many records in another table (1:M)', page: 'ddd/analysis.html', section: 'DDD' },
    { term: 'Many-to-many', desc: 'Many records in one table link to many in another — resolved with a linking table (M:N)', page: 'ddd/analysis.html', section: 'DDD' },
    { term: 'One-to-one', desc: 'One record in a table links to exactly one record in another (1:1)', page: 'ddd/analysis.html', section: 'DDD' },
    { term: 'Linking table', desc: 'Junction table that resolves a many-to-many relationship into two one-to-many relationships', page: 'ddd/analysis.html', section: 'DDD' },

    /* ── DDD: ER Diagrams ─── */
    { term: 'ER diagram', desc: 'Entity-relationship diagram showing entities, attributes and relationships', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Entity-relationship diagram', desc: 'Visual model showing the structure of a database before implementation', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Cardinality', desc: 'Notation showing the number in a relationship — the 1 or M on relationship lines', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Entity-occurrence diagram', desc: 'Shows actual example instances of entities and how they relate — confirms cardinality understanding', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Occurrence diagram', desc: 'Diagram showing real data examples in entities to illustrate relationship cardinality', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Compound key', desc: 'Primary key made of two or more attributes that together uniquely identify a record', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Composite key', desc: 'A primary key consisting of two or more attributes combined — also called compound key', page: 'ddd/er-diagrams.html', section: 'DDD' },

    /* ── DDD: Database Design ─── */
    { term: 'Primary key', desc: 'Unique identifier for each record in a table — cannot be NULL', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'Foreign key', desc: 'Field referencing the primary key of another table — creates a link between tables', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'Data dictionary', desc: 'Document describing every attribute: entity, name, key, type, size, validation', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'Presence check', desc: 'Validation that ensures a field is not left empty — value must be entered', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'Range check', desc: 'Validation that ensures a value falls within a minimum and maximum limit', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'Type check', desc: 'Validation that ensures the entered value is of the correct data type', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'Restricted choice', desc: 'Validation that allows only specific permitted values — e.g. "M", "F" or "Other"', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'Length check', desc: 'Validation that ensures a value is not longer than the maximum allowed characters', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'Referential integrity', desc: 'Foreign key values must match a valid primary key in the referenced table', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'NULL', desc: 'An empty or missing value in a database field', page: 'ddd/database-design.html', section: 'DDD' },
    { term: 'Relational database', desc: 'Database storing data in related tables linked by primary and foreign keys', page: 'ddd/database-design.html', section: 'DDD' },

    /* ── DDD: SQL Queries ─── */
    { term: 'SQL', desc: 'Structured Query Language — used to create, read, update and delete database data', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'SELECT', desc: 'SQL command for retrieving data from one or more tables', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'WHERE', desc: 'SQL clause for filtering records based on a condition', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'ORDER BY', desc: 'SQL clause for sorting results — ASC (default) or DESC', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'GROUP BY', desc: 'SQL clause for grouping rows so aggregate functions apply per group', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'LIKE', desc: 'SQL operator for pattern matching — % matches any characters, _ matches one character', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'Wildcard', desc: 'SQL search character: % matches any sequence of characters, _ matches exactly one', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'Computed value', desc: 'A calculated column in SQL SELECT — e.g. UnitPrice * Quantity AS TotalCost', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'Alias', desc: 'SQL AS keyword — gives a column or table a readable name in query results', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'AS', desc: 'SQL keyword for aliasing a column or table — e.g. COUNT(*) AS Total', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'COUNT', desc: 'SQL aggregate function — returns the number of rows matching a query', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'SUM', desc: 'SQL aggregate function — returns the total of all values in a field', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'AVG', desc: 'SQL aggregate function — returns the average (mean) of values in a field', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'MAX', desc: 'SQL aggregate function — returns the largest value in a field', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'MIN', desc: 'SQL aggregate function — returns the smallest value in a field', page: 'ddd/sql-queries.html', section: 'DDD' },
    { term: 'Aggregate function', desc: 'SQL function performing a calculation on a set: COUNT, SUM, AVG, MAX, MIN', page: 'ddd/sql-queries.html', section: 'DDD' },

    /* ── DDD: SQL Joins ─── */
    { term: 'INNER JOIN', desc: 'SQL join returning only rows with matching values in both tables', page: 'ddd/sql-joins.html', section: 'DDD' },
    { term: 'JOIN', desc: 'SQL operation combining data from multiple related tables using key relationships', page: 'ddd/sql-joins.html', section: 'DDD' },
    { term: 'ON', desc: 'SQL keyword specifying the condition linking two tables in a JOIN', page: 'ddd/sql-joins.html', section: 'DDD' },

    /* ── DDD: SQL CRUD ─── */
    { term: 'INSERT', desc: 'SQL command for adding a new record to a table', page: 'ddd/sql-crud.html', section: 'DDD' },
    { term: 'UPDATE', desc: 'SQL command for modifying existing records in a table', page: 'ddd/sql-crud.html', section: 'DDD' },
    { term: 'DELETE', desc: 'SQL command for permanently removing records from a table', page: 'ddd/sql-crud.html', section: 'DDD' },
    { term: 'VALUES', desc: 'SQL clause used with INSERT INTO to specify the data to add', page: 'ddd/sql-crud.html', section: 'DDD' },
    { term: 'SET', desc: 'SQL clause used with UPDATE to specify the new values', page: 'ddd/sql-crud.html', section: 'DDD' },

    /* ── DDD: Testing & Evaluation ─── */
    { term: 'Accuracy of output', desc: 'DDD evaluation criterion — SQL queries return the correct expected data', page: 'ddd/testing-evaluation.html', section: 'DDD' },
    { term: 'Data integrity', desc: 'Ensuring data stored in a database is accurate, consistent and reliable', page: 'ddd/testing-evaluation.html', section: 'DDD' },
    { term: 'Data validation', desc: 'Checks applied when data is entered to prevent incorrect values being stored', page: 'ddd/testing-evaluation.html', section: 'DDD' },

    /* ── CS: Numbers ─── */
    { term: 'Binary', desc: 'Base-2 number system using only 0 and 1 — how all data is stored in a computer', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: 'Denary', desc: 'Base-10 number system (normal counting numbers 0–9)', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: "Two's complement", desc: 'Method for representing both positive and negative integers in binary — Higher spec required', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: 'Floating-point', desc: 'Method for representing positive and negative real numbers in binary using mantissa and exponent', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: 'Mantissa', desc: 'The significant digits part of a floating-point number — more bits = greater precision', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: 'Exponent', desc: 'The power part of a floating-point number — more bits = greater range', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: 'Precision', desc: 'How many significant digits are stored accurately — determined by mantissa size', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: 'Range', desc: 'How large or small a number can be — determined by exponent size in floating-point', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: 'Bit', desc: 'A single binary digit — either 0 or 1', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: 'Byte', desc: 'A group of 8 bits', page: 'cs/data-representation-numbers.html', section: 'CS' },
    { term: 'Sign bit', desc: 'The most significant bit in two\'s complement — 0 = positive, 1 = negative', page: 'cs/data-representation-numbers.html', section: 'CS' },

    /* ── CS: Text & Graphics ─── */
    { term: 'Extended ASCII', desc: '8-bit text encoding supporting 256 characters — Western European only', page: 'cs/data-representation-text-graphics.html', section: 'CS' },
    { term: 'ASCII', desc: 'American Standard Code for Information Interchange — 8-bit extended version supports 256 characters', page: 'cs/data-representation-text-graphics.html', section: 'CS' },
    { term: 'Unicode', desc: 'Universal character encoding (UTF-8) supporting over 140,000 characters from all writing systems', page: 'cs/data-representation-text-graphics.html', section: 'CS' },
    { term: 'UTF-8', desc: 'Variable-length Unicode encoding — uses 1–4 bytes per character', page: 'cs/data-representation-text-graphics.html', section: 'CS' },
    { term: 'Bitmap', desc: 'Image stored as a grid of pixels — also called a raster image', page: 'cs/data-representation-text-graphics.html', section: 'CS' },
    { term: 'Vector', desc: 'Image stored as mathematical descriptions of shapes — scales without quality loss', page: 'cs/data-representation-text-graphics.html', section: 'CS' },
    { term: 'Pixel', desc: 'The smallest unit of a bitmap image — a single coloured dot', page: 'cs/data-representation-text-graphics.html', section: 'CS' },
    { term: 'Resolution', desc: 'Number of pixels in an image (width × height) — more pixels = more detail = larger file', page: 'cs/data-representation-text-graphics.html', section: 'CS' },
    { term: 'Colour depth', desc: 'Number of bits per pixel — more bits = more colours — 24-bit = 16.7 million colours', page: 'cs/data-representation-text-graphics.html', section: 'CS' },
    { term: 'File size calculation', desc: 'Bitmap file size = width × height × colour depth (bits), then convert to bytes', page: 'cs/data-representation-text-graphics.html', section: 'CS' },

    /* ── CS: Computer Structure ─── */
    { term: 'CPU', desc: 'Central Processing Unit — carries out all program instructions via fetch-execute cycle', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'ALU', desc: 'Arithmetic Logic Unit — performs arithmetic and logical operations inside the CPU', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Control Unit', desc: 'Part of the CPU that manages the fetch-execute cycle and coordinates components', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Register', desc: 'Very fast, small memory location inside the CPU (PC, MAR, MDR, ACC)', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'RAM', desc: 'Random Access Memory — volatile working memory storing current programs and data', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'ROM', desc: 'Read Only Memory — non-volatile memory storing boot firmware (BIOS)', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Cache memory', desc: 'Fast memory between CPU and RAM — stores frequently accessed data to speed up processing', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Data bus', desc: 'Carries data between CPU and memory — width (bits) affects how much is transferred per cycle', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Address bus', desc: 'Carries memory addresses from CPU to RAM', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Fetch-execute cycle', desc: 'Continuous process: Fetch instruction → Decode → Execute — repeated for every instruction', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Program Counter', desc: 'Register holding the address of the next instruction to fetch — increments after each fetch', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'MAR', desc: 'Memory Address Register — holds the address being accessed during a fetch', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'MDR', desc: 'Memory Data Register — temporarily holds the instruction or data fetched from RAM', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Clock speed', desc: 'Number of clock cycles per second (GHz) — higher = more instructions per second', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Number of cores', desc: 'More processor cores allow simultaneous instruction streams — improves performance', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Multi-core', desc: 'A processor with multiple cores — each can execute instructions simultaneously', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Volatile', desc: 'Memory that loses its contents when power is off (e.g. RAM)', page: 'cs/computer-structure.html', section: 'CS' },
    { term: 'Non-volatile', desc: 'Memory that retains data without power (e.g. ROM, SSD)', page: 'cs/computer-structure.html', section: 'CS' },

    /* ── CS: Environmental Impact (Intelligent Systems) ─── */
    { term: 'Intelligent system', desc: 'Computer-controlled system using sensors and software to make automated decisions', page: 'cs/environmental-impact.html', section: 'CS' },
    { term: 'Intelligent heating system', desc: 'Uses occupancy sensors and learning to heat only when needed — reduces wasted energy', page: 'cs/environmental-impact.html', section: 'CS' },
    { term: 'Traffic control system', desc: 'Uses sensors to dynamically adjust traffic light timings — reduces idling and fuel use', page: 'cs/environmental-impact.html', section: 'CS' },
    { term: 'Car management system', desc: 'Engine management, start-stop and regenerative braking systems that optimise fuel use', page: 'cs/environmental-impact.html', section: 'CS' },
    { term: 'Engine management system', desc: 'Controls fuel injection and ignition timing based on sensor data to maximise efficiency', page: 'cs/environmental-impact.html', section: 'CS' },
    { term: 'Start-stop system', desc: 'Automatically shuts off the engine when stationary — eliminates idling fuel consumption', page: 'cs/environmental-impact.html', section: 'CS' },
    { term: 'Regenerative braking', desc: 'Converts kinetic energy during braking into electricity stored in the battery', page: 'cs/environmental-impact.html', section: 'CS' },
    { term: 'Sensor', desc: 'Device that detects real-world conditions (temperature, motion, speed) and converts to data', page: 'cs/environmental-impact.html', section: 'CS' },
    { term: 'Actuator', desc: 'Device that carries out an action based on a computer\'s decision (valve, motor, signal)', page: 'cs/environmental-impact.html', section: 'CS' },
    { term: 'SCOOT', desc: 'Split Cycle Offset Optimisation Technique — UK intelligent traffic control system', page: 'cs/environmental-impact.html', section: 'CS' },

    /* ── CS: Security ─── */
    { term: 'Computer Misuse Act', desc: 'UK law (1990) defining three offences: unauthorised access, access with intent, modification', page: 'cs/security.html', section: 'CS' },
    { term: 'Computer Misuse Act 1990', desc: 'Three offences: unauthorised access; access with intent for further crime; unauthorised modification', page: 'cs/security.html', section: 'CS' },
    { term: 'Unauthorised access', desc: 'CMA Offence 1 — accessing a computer or data without permission', page: 'cs/security.html', section: 'CS' },
    { term: 'Unauthorised access with intent', desc: 'CMA Offence 2 — accessing a computer as a stepping stone to a further crime', page: 'cs/security.html', section: 'CS' },
    { term: 'Unauthorised modification', desc: 'CMA Offence 3 — making unauthorised changes to data or programs', page: 'cs/security.html', section: 'CS' },
    { term: 'Tracking cookie', desc: 'Cookie placed by a third party to monitor browsing across multiple websites for profiling', page: 'cs/security.html', section: 'CS' },
    { term: 'Cookie', desc: 'Small text file stored by a website in your browser — tracking cookies follow you across sites', page: 'cs/security.html', section: 'CS' },
    { term: 'DOS attack', desc: 'Denial of Service — floods a server with requests to prevent legitimate users accessing it', page: 'cs/security.html', section: 'CS' },
    { term: 'DDoS attack', desc: 'Distributed Denial of Service — DoS carried out using many computers (a botnet)', page: 'cs/security.html', section: 'CS' },
    { term: 'Denial of service', desc: 'Attack that overwhelms a server to make a service unavailable — lost revenue, reputational damage', page: 'cs/security.html', section: 'CS' },
    { term: 'Botnet', desc: 'Network of compromised computers controlled remotely — used to launch DDoS attacks', page: 'cs/security.html', section: 'CS' },
    { term: 'Encryption', desc: 'Scrambling data so it can only be read by someone with the correct key', page: 'cs/security.html', section: 'CS' },
    { term: 'Public key', desc: 'Shared openly — used to encrypt data sent to the key owner', page: 'cs/security.html', section: 'CS' },
    { term: 'Private key', desc: 'Kept secret by the owner — used to decrypt data encrypted with the matching public key', page: 'cs/security.html', section: 'CS' },
    { term: 'Public key encryption', desc: 'Asymmetric encryption using a matched public/private key pair for secure communication', page: 'cs/security.html', section: 'CS' },
    { term: 'Digital certificate', desc: 'Issued by a Certificate Authority — proves a website\'s public key is genuine', page: 'cs/security.html', section: 'CS' },
    { term: 'Certificate Authority', desc: 'Trusted organisation that issues digital certificates verifying website identity', page: 'cs/security.html', section: 'CS' },
    { term: 'Digital signature', desc: 'Sender encrypts a message hash with their private key — proves authenticity and integrity', page: 'cs/security.html', section: 'CS' },
    { term: 'Hash', desc: 'Fixed-size fingerprint of a document used in digital signatures to verify integrity', page: 'cs/security.html', section: 'CS' },

    /* ── WDD: Analysis & Design ─── */
    { term: 'Target audience', desc: 'The specific group of people a website is designed for — shapes design decisions', page: 'wdd/analysis-design.html', section: 'WDD' },
    { term: 'Website structure', desc: 'Hierarchy diagram showing all pages and how they link — levels 0, 1, 2', page: 'wdd/analysis-design.html', section: 'WDD' },
    { term: 'Website hierarchy', desc: 'Tree diagram showing the multi-level structure of a website', page: 'wdd/analysis-design.html', section: 'WDD' },
    { term: 'Low-fidelity prototype', desc: 'Simple sketch or mockup used to test layout and navigation before coding begins', page: 'wdd/analysis-design.html', section: 'WDD' },
    { term: 'Prototyping', desc: 'Creating a low-fidelity version of a website to gather client feedback before development', page: 'wdd/analysis-design.html', section: 'WDD' },
    { term: 'Navigation structure', desc: 'How pages are linked and how users move between them — must be within 2 clicks of home', page: 'wdd/analysis-design.html', section: 'WDD' },

    /* ── WDD: HTML ─── */
    { term: 'Semantic elements', desc: 'HTML5 elements with meaningful names: header, nav, section, article, aside, footer', page: 'wdd/html.html', section: 'WDD' },
    { term: 'header', desc: 'Semantic HTML element for introductory content — logo, site title, main navigation', page: 'wdd/html.html', section: 'WDD' },
    { term: 'nav', desc: 'Semantic HTML element wrapping a set of navigation links', page: 'wdd/html.html', section: 'WDD' },
    { term: 'section', desc: 'Semantic HTML element for a thematic grouping of content with its own heading', page: 'wdd/html.html', section: 'WDD' },
    { term: 'article', desc: 'Semantic HTML element for self-contained distributable content (blog post, news item)', page: 'wdd/html.html', section: 'WDD' },
    { term: 'aside', desc: 'Semantic HTML element for content tangentially related to main content — sidebar', page: 'wdd/html.html', section: 'WDD' },
    { term: 'footer', desc: 'Semantic HTML element for bottom-of-page content — copyright, contact, site map', page: 'wdd/html.html', section: 'WDD' },
    { term: 'HTML form', desc: 'HTML structure that collects user input — text, radio, checkbox, dropdown, submit', page: 'wdd/html.html', section: 'WDD' },
    { term: 'Radio button', desc: 'HTML input type="radio" — allows selection of exactly one option from a group', page: 'wdd/html.html', section: 'WDD' },
    { term: 'Checkbox', desc: 'HTML input type="checkbox" — allows selection of zero or more options', page: 'wdd/html.html', section: 'WDD' },
    { term: 'Drop-down list', desc: 'HTML <select> element — displays a list of options for the user to choose from', page: 'wdd/html.html', section: 'WDD' },
    { term: 'Textarea', desc: 'HTML element for multi-line text input — used for messages and comments', page: 'wdd/html.html', section: 'WDD' },
    { term: 'Submit button', desc: 'HTML input type="submit" — sends form data to the server when clicked', page: 'wdd/html.html', section: 'WDD' },

    /* ── WDD: CSS ─── */
    { term: 'Display property', desc: 'CSS property controlling element layout: block, inline, inline-block, none', page: 'wdd/css.html', section: 'WDD' },
    { term: 'display: block', desc: 'Element takes full width, starts on a new line — can have width/height', page: 'wdd/css.html', section: 'WDD' },
    { term: 'display: inline', desc: 'Element flows with text, no new line — cannot set width or height', page: 'wdd/css.html', section: 'WDD' },
    { term: 'display: inline-block', desc: 'Flows inline but can have width, height and vertical margins', page: 'wdd/css.html', section: 'WDD' },
    { term: 'Float', desc: 'CSS property moving an element left or right — other content wraps around it', page: 'wdd/css.html', section: 'WDD' },
    { term: 'Clear', desc: 'CSS property preventing an element from sitting beside a floated element', page: 'wdd/css.html', section: 'WDD' },
    { term: 'Navigation bar', desc: 'Horizontal or vertical menu created with CSS float or display — includes hover effects', page: 'wdd/css.html', section: 'WDD' },
    { term: 'Hover effect', desc: 'CSS :hover pseudo-class — applies styles when mouse moves over an element', page: 'wdd/css.html', section: 'WDD' },
    { term: ':hover', desc: 'CSS pseudo-class — triggers styles when user hovers mouse over an element', page: 'wdd/css.html', section: 'WDD' },
    { term: 'Margin', desc: 'CSS property — space outside the element border, pushes other elements away', page: 'wdd/css.html', section: 'WDD' },
    { term: 'Padding', desc: 'CSS property — space inside the element border, between border and content', page: 'wdd/css.html', section: 'WDD' },
    { term: 'Box model', desc: 'CSS model: content → padding → border → margin for every HTML element', page: 'wdd/css.html', section: 'WDD' },
    { term: 'CSS selector', desc: 'Pattern that targets HTML elements for styling: element, .class, #id', page: 'wdd/css.html', section: 'WDD' },
    { term: 'External stylesheet', desc: 'A separate .css file linked with <link> — applies styles across all pages', page: 'wdd/css.html', section: 'WDD' },

    /* ── WDD: JavaScript ─── */
    { term: 'onclick', desc: 'JavaScript mouse event — fires when the user clicks an element', page: 'wdd/javascript.html', section: 'WDD' },
    { term: 'onmouseover', desc: 'JavaScript mouse event — fires when the mouse pointer enters an element', page: 'wdd/javascript.html', section: 'WDD' },
    { term: 'onmouseout', desc: 'JavaScript mouse event — fires when the mouse pointer leaves an element', page: 'wdd/javascript.html', section: 'WDD' },
    { term: 'Mouse event', desc: 'JavaScript event triggered by mouse actions: onclick, onmouseover, onmouseout', page: 'wdd/javascript.html', section: 'WDD' },
    { term: 'getElementById', desc: 'JavaScript method that returns the element with a matching id attribute', page: 'wdd/javascript.html', section: 'WDD' },
    { term: 'document.getElementById', desc: 'JavaScript method for accessing an HTML element by its id to read or change it', page: 'wdd/javascript.html', section: 'WDD' },
    { term: 'innerHTML', desc: 'JavaScript property for getting or setting the HTML content inside an element', page: 'wdd/javascript.html', section: 'WDD' },
    { term: 'Event handler', desc: 'JavaScript function that runs in response to a user action (click, mouseover)', page: 'wdd/javascript.html', section: 'WDD' },
    { term: 'Rollover effect', desc: 'Image or style change triggered by onmouseover/onmouseout events', page: 'wdd/javascript.html', section: 'WDD' },

    /* ── WDD: Testing & Evaluation ─── */
    { term: 'Usability testing', desc: 'Testing where representative users attempt tasks to identify navigation and design problems', page: 'wdd/testing-evaluation.html', section: 'WDD' },
    { term: 'Persona', desc: 'Fictional but realistic profile of a target user — used to focus usability testing', page: 'wdd/testing-evaluation.html', section: 'WDD' },
    { term: 'Test case', desc: 'A specific task given to a user in usability testing with expected and actual outcomes', page: 'wdd/testing-evaluation.html', section: 'WDD' },
    { term: 'Compatibility testing', desc: 'Testing a website across different browsers (Chrome, Firefox, Safari, Edge) and devices', page: 'wdd/testing-evaluation.html', section: 'WDD' },
    { term: 'Accessibility testing', desc: 'Checking a website works for users with visual, motor or cognitive impairments', page: 'wdd/testing-evaluation.html', section: 'WDD' },
    { term: 'Responsive design', desc: 'Website layout adapts to different screen sizes — desktop, tablet and mobile', page: 'wdd/testing-evaluation.html', section: 'WDD' },
  ];

  const SECTION_COLOURS = {
    SDD: { bg: '#00442A', text: '#fff' },
    DDD: { bg: '#002D1C', text: '#fff' },
    CS:  { bg: '#1B6B45', text: '#fff' },
    WDD: { bg: '#92750A', text: '#fff' },
  };

  /* ── Build the search UI ─────────────────────────────────── */
  function init () {
    const wrap = document.getElementById('search-wrap');
    if (!wrap) return;

    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    let activeIndex = -1;
    let results = [];

    function search (query) {
      query = query.trim().toLowerCase();
      if (query.length < 2) { hide(); return; }

      results = INDEX.filter(entry =>
        entry.term.toLowerCase().includes(query) ||
        entry.desc.toLowerCase().includes(query)
      ).slice(0, 10);

      if (results.length === 0) {
        dropdown.innerHTML = '<div class="sd-empty">No results found</div>';
      } else {
        dropdown.innerHTML = results.map((r, i) => {
          const c = SECTION_COLOURS[r.section] || SECTION_COLOURS.SDD;
          const hl = (str) => {
            const re = new RegExp(`(${escapeRe(query)})`, 'gi');
            return str.replace(re, '<mark>$1</mark>');
          };
          return `
            <a class="sd-item" href="${ROOT}${r.page}" data-index="${i}" tabindex="-1">
              <span class="sd-badge" style="background:${c.bg};color:${c.text}">${r.section}</span>
              <span class="sd-text">
                <span class="sd-term">${hl(r.term)}</span>
                <span class="sd-desc">${hl(r.desc)}</span>
              </span>
            </a>`;
        }).join('');
      }

      dropdown.classList.add('open');
      activeIndex = -1;
    }

    function hide () {
      dropdown.classList.remove('open');
      activeIndex = -1;
    }

    function setActive (n) {
      const items = dropdown.querySelectorAll('.sd-item');
      items.forEach(el => el.classList.remove('active'));
      activeIndex = Math.max(-1, Math.min(n, items.length - 1));
      if (activeIndex >= 0) items[activeIndex].classList.add('active');
    }

    function escapeRe (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

    input.addEventListener('input', () => search(input.value));

    input.addEventListener('keydown', (e) => {
      if (!dropdown.classList.contains('open')) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(activeIndex + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(activeIndex - 1); }
      else if (e.key === 'Enter') {
        e.preventDefault();
        const active = dropdown.querySelector('.sd-item.active');
        if (active) active.click();
        else { const first = dropdown.querySelector('.sd-item'); if (first) first.click(); }
      }
      else if (e.key === 'Escape') { hide(); input.blur(); }
    });

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) hide();
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2) search(input.value);
    });
  }

  /* Run after DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
