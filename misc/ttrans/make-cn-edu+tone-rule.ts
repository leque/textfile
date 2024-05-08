import { addZhToneMark2, printRule, RuleEntry }  from './util.ts'
import { cnEduPats }  from './cn-edu-pats.ts'

const makeCnEduRule = (): Array<RuleEntry> => {
    const result = cnEduPats.flatMap(([pat, replacement, qingsheng]) => {
        const result = addZhToneMark2(pat, replacement).map(([pattern, replacement]) => ({ pattern, replacement }));
        if (qingsheng) {
            result.push({
                pattern: pat,
                replacement: "\u{02d9}" + qingsheng + " "
            });
        } else {
            result.push({
                pattern: pat,
                replacement
            });
        }
        return result;
    });
    result.push({
        pattern: " ",
        replacement: ""
    });
    return result;
}

printRule(makeCnEduRule());
