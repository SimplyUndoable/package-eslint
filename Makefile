
run_%: publish_$*

v_patch: 
	yarn version --patch

v_minor: 
	yarn version --minor
	
v_major: 
	yarn version --major

licence:
	yarn licenses generate-disclaimer > LICENSE
	
publish_%: licence v_$*
	yarn publish --access public
	