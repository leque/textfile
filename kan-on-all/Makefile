.PHONY: clean

日本漢音廣韻全字表.csv: 隋語廣韻全字表.csv 廣韻小韻日本漢音表.csv kan-on.sql
	csvq -s kan-on.sql -o $@

clean:
	rm -f 日本漢音廣韻全字表.csv
