# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-named-export-destructuring8`

```javascript
Program {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 49
			line: 3
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		ExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 19
					index: 19
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: ClassDeclaration {
				id: BindingIdentifier {
					name: "Foo"
					loc: Object {
						filename: "input.js"
						identifierName: "Foo"
						end: Object {
							column: 16
							index: 16
							line: 1
						}
						start: Object {
							column: 13
							index: 13
							line: 1
						}
					}
				}
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 19
						index: 19
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
				meta: ClassHead {
					body: Array []
					implements: undefined
					superClass: undefined
					superTypeParameters: undefined
					typeParameters: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 19
							index: 19
							line: 1
						}
						start: Object {
							column: 7
							index: 7
							line: 1
						}
					}
				}
			}
		}
		EmptyStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 20
					index: 20
					line: 1
				}
				start: Object {
					column: 19
					index: 19
					line: 1
				}
			}
		}
		ExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 27
					index: 48
					line: 2
				}
				start: Object {
					column: 0
					index: 21
					line: 2
				}
			}
			declaration: VariableDeclarationStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 27
						index: 48
						line: 2
					}
					start: Object {
						column: 7
						index: 28
						line: 2
					}
				}
				declaration: VariableDeclaration {
					kind: "const"
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 27
							index: 48
							line: 2
						}
						start: Object {
							column: 7
							index: 28
							line: 2
						}
					}
					declarations: Array [
						VariableDeclarator {
							id: BindingObjectPattern {
								rest: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 20
										index: 41
										line: 2
									}
									start: Object {
										column: 13
										index: 34
										line: 2
									}
								}
								properties: Array [
									BindingObjectPatternProperty {
										key: StaticPropertyKey {
											value: Identifier {
												name: "Foo"
												loc: Object {
													filename: "input.js"
													identifierName: "Foo"
													end: Object {
														column: 18
														index: 39
														line: 2
													}
													start: Object {
														column: 15
														index: 36
														line: 2
													}
												}
											}
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 18
													index: 39
													line: 2
												}
												start: Object {
													column: 15
													index: 36
													line: 2
												}
											}
										}
										value: BindingIdentifier {
											name: "Foo"
											loc: Object {
												filename: "input.js"
												identifierName: "Foo"
												end: Object {
													column: 18
													index: 39
													line: 2
												}
												start: Object {
													column: 15
													index: 36
													line: 2
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 18
												index: 39
												line: 2
											}
											start: Object {
												column: 15
												index: 36
												line: 2
											}
										}
									}
								]
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 26
									index: 47
									line: 2
								}
								start: Object {
									column: 13
									index: 34
									line: 2
								}
							}
							init: ReferenceIdentifier {
								name: "bar"
								loc: Object {
									filename: "input.js"
									identifierName: "bar"
									end: Object {
										column: 26
										index: 47
										line: 2
									}
									start: Object {
										column: 23
										index: 44
										line: 2
									}
								}
							}
						}
					]
				}
			}
		}
	]
}
```
